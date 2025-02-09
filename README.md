# CoCa  

# Link to dashboard: 
https://v0-cora-ovghhi.vercel.app/

# hackhers: 
contains frontend code used by vercel to host our dashboard
# data: 
contains versions of our artifical data

# adyl.bi
where we trained our model

## Inspiration
We were inspired by the ADP company challenge, which highlighted the need for tools that help HR teams proactively improve workplace morale and employee well-being. Workplace harassment, discrimination, and/or bullying can often fly under the radar as victims hesitate to report. This issue led us to create CoCa (CorporateCare), an AI-powered Employee Sentiment Dashboard designed to offer insights into employee behavior by analyzing workplace communication and flagging toxicity.

## What it does
CoCa analyzes feedback reports, emails, and chat logs of employees in order to track communication sentiment, flag toxic behavior, and provide actionable insights to HR teams in a dashboard display. Key features include sentiment analysis and toxicity detection.

## How we built it
We trained AI sentiment models on artificial workplace communication data using machine learning. The text data was created by prompting gen AI, then the texts were tokenized and labels were matched to types of discrimination. The sentiment models were chosen from Hugging Face and trained on this data in Google Colab. The dashboard was created using Vercel and displays these insights in a user-friendly interface, with upcoming features for timeline-based analysis and trend sorting.

