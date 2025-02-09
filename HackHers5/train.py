from transformers import RobertaForSequenceClassification, RobertaTokenizer
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
import torch

# Load models
emotion_model = RobertaForSequenceClassification.from_pretrained("SamLowe/roberta-base-go_emotions")
emotion_tokenizer = RobertaTokenizer.from_pretrained("SamLowe/roberta-base-go_emotions")

toxicity_model = RobertaForSequenceClassification.from_pretrained("unitary/unbiased-toxic-roberta")
toxicity_tokenizer = RobertaTokenizer.from_pretrained("unitary/unbiased-toxic-roberta")

# Load the pre-trained model and tokenizer
model = DistilBertForSequenceClassification.from_pretrained("AventIQ-AI/distilbert-mental-health-prediction")
tokenizer = DistilBertTokenizer.from_pretrained("AventIQ-AI/distilbert-mental-health-prediction")

# Define emotion labels (for mapping the ID to a readable emotion)
emotion_labels = [
    "anger", "fear", "joy", "sadness", "surprise", "disgust", "shame", "guilt", "excited", 
    "optimistic", "hopeful", "boredom", "frustration", "interest", "curiosity", "confusion", 
    "embarrassment", "appreciation", "contentment", "relief", "pride", "love", "hate", "envy", 
    "grief", "loneliness", "jealousy", "trust", "serenity", "calm", "nervousness", "trust", "admiration"
]

# Define discrimination categories (based on keywords)
# Define discrimination categories (with more keywords)
discrimination_keywords = {
    "gender": [
        "woman", "girl", "female", "lady", "sexist", "masculine", "feminine", "chauvinist", 
        "gendered", "misogyny", "misogynist", "patriarchy", "gender bias", "sexist", "damsel",
        "fragile", "manly", "bossy"
    ],
    "race": [
        "black", "white", "asian", "latino", "racist", "colored", "ethnicity", "racism", 
        "xenophobia", "stereotype", "prejudice", "discrimination", "caucasian", "latina", 
        "negro", "african-american", "hispanic", "native", "aboriginal"
    ],
    "age": [
        "old", "young", "kid", "elderly", "ageist", "geriatric", "middle-aged", "millennial",
        "teenager", "senior", "boomer", "boomerang", "baby boomer", "over the hill", 
        "past your prime", "youngster", "old-fashioned"
    ],
    "disability": [
        "disabled", "handicapped", "special needs", "ableist", "differently-abled", "deaf", 
        "blind", "mute", "paraplegic", "quadriplegic", "autistic", "disability", "impairment", 
        "illness", "crippled", "challenged", "wheelchair-bound"
    ],
    "sexual orientation": [
        "gay", "lesbian", "homophobic", "queer", "lgbtq", "bisexual", "transgender", 
        "heteronormative", "heterosexual", "same-sex", "gay-bashing", "gay marriage", "bi-phobic",
        "transphobic", "queerphobic", "lesbophobic", "rainbow flag", "coming out", "cisgender"
    ],
    "religion": [
        "christian", "muslim", "jewish", "buddhist", "hindu", "atheist", "agnostic", "catholic", 
        "islamophobia", "anti-semitic", "bigot", "holy war", "blasphemy", "preach", "faith", 
        "sacred", "prophet", "infidel", "crusade"
    ],
    "nationality": [
        "american", "canadian", "english", "french", "german", "irish", "chinese", "japanese", 
        "russian", "mexican", "indian", "immigrant", "foreigner", "xenophobic", "nationalism", 
        "patriot", "immigration", "foreign-born", "expat"
    ]
}

# Label map for the mental health classifier model
label_map = {
    0: "Anxiety",
    1: "Normal",
    2: "Depression",
    3: "Suicidal",
    4: "Stress",
    5: "Bipolar",
    6: "Personality disorder"
}

# Function to predict emotion
def predict_emotion(text):
    inputs = emotion_tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    logits = emotion_model(**inputs).logits
    predicted_class_id = logits.argmax(dim=-1).item()  
    return emotion_labels[predicted_class_id]  # Return emotion name

# Function to predict toxicity
def predict_toxicity(text):
    inputs = toxicity_tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    logits = toxicity_model(**inputs).logits
    # If the logits contain multiple elements (batch_size or multiple classes), we need to process the first element
    if logits.size(-1) > 1:
        logits = logits[:, 0]  # Focus on the first logit value
    # Apply sigmoid and get a single scalar (probability of toxicity)
    toxicity_score = torch.sigmoid(logits).item()  # Convert to scalar using .item()
    return toxicity_score

# Function to classify discrimination type
def classify_discrimination(text):
    for category, keywords in discrimination_keywords.items():
        for keyword in keywords:
            if keyword.lower() in text.lower():  # Check if keyword exists in the text
                return category  # Return the type of discrimination found
    return "Unknown"  # If no category matches, return Unknown

# Function to predict mental health status
def predict_mental_health(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=512)
    logits = model(**inputs).logits
    predicted_class_id = logits.argmax(dim=-1).item()  # Get the index of the max logit value
    return label_map[predicted_class_id] 

# Example message to test
message = "Hi, I hope you're doing well. I wanted to take a moment to give you some feedback on your recent work. While I appreciate the effort you’ve put in, there are a few areas that still need attention. It seems like you’re always struggling to meet expectations, and this has become quite noticeable. I know it's a lot to handle, but you really need to improve your focus. I've had to step in multiple times because of avoidable mistakes, and it’s getting a bit tiring. Maybe it’s just not the right role for you, but I would really like to see you put in more effort and attention to detail. It would help if you could try harder and stop making excuses for your performance. Let me know how you plan to improve. It’s getting to the point where we might need to discuss whether you’re the right fit here."

# Get predictions
emotion = predict_emotion(message)
toxicity = predict_toxicity(message)
prediction = predict_mental_health(message)

# Print results
print(f"Predicted Emotion: {emotion}")
print(f"Predicted mental condition: {prediction}")
print(f"Toxicity Score: {toxicity:.2f}")

# Check if toxicity score is above the threshold and classify the type of discrimination
if toxicity > 0.00:
    discrimination_type = classify_discrimination(message)
    print(f"Discrimination Type: {discrimination_type}")
else:
    print("No significant toxicity detected.")

