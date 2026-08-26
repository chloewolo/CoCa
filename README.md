# CoCa (CorporateCare) — AI-Powered Employee Sentiment Dashboard

🏆 Winner, ADP Challenge Track — "AI-Powered Employee Sentiment Analysis" @ Rutgers HackHers 2025

**Live dashboard:** https://v0-cora-ovghhi.vercel.app/

## Inspiration

We were inspired by the ADP company challenge, which highlighted the need for tools that help HR teams proactively improve workplace morale and employee well-being. Workplace harassment, discrimination, and/or bullying can often fly under the radar as victims hesitate to report. This issue led us to create CoCa (CorporateCare), an AI-powered Employee Sentiment Dashboard designed to offer insights into employee behavior by analyzing workplace communication and flagging toxicity.

## What it does

CoCa analyzes feedback reports, emails, and chat logs of employees in order to track communication sentiment, flag toxic behavior, and provide actionable insights to HR teams in a dashboard display. Key features include sentiment analysis and toxicity detection.

## How we built it

We trained AI sentiment models on artificial workplace communication data using machine learning. The text data was created by prompting generative AI, then the texts were tokenized and labels were matched to types of discrimination. We fine-tuned a multi-output BERT model from Hugging Face on this data in Google Colab, with one output predicting whether a message is discriminatory and a second predicting the discrimination type (sexist, racist, or none). The model was trained with cross-entropy loss and the AdamW optimizer. The dashboard was built with Vercel and displays these insights in a user-friendly interface, with upcoming features for timeline-based analysis and trend sorting.

## Repository structure

```
.
├── hackhers/     # Frontend code used by Vercel to host the dashboard
├── data/         # Versions of our artificial training data
├── adp.ipynb     # Notebook where we trained our model
├── slides/       # Our final hackathon presentation deck
└── README.md
```

## Presentation

Click [here](Coca.pdf) to see our full hackathon deck!

## Evaluation

| Task | Precision | Recall | F1-score |
|---|---|---|---|
| Is discriminatory (weighted avg) | 0.78 | 0.75 | 0.75 |
| Discrimination type (weighted avg) | 0.61 | 0.55 | 0.56 |

## Future plans

1. **Data augmentation & preprocessing** — collect more labeled data (especially for under-represented discrimination types), generate more diverse synthetic data, and focus on subtle/implicit discrimination examples.
2. **Model architecture & training** — ensemble predictions across models, tune with grid search / Bayesian optimization, add k-fold cross-validation, and monitor performance and fairness over time.
3. **More classifications** — add additional discrimination types and classify messages by severity.

## Built with

Python · Hugging Face Transformers (BERT) · Google Colab · Vercel
