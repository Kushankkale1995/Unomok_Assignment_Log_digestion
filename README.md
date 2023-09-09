# Unomok_Assignment_Log_digestion

# data (download the file from following link)
(https://drive.google.com/drive/folders/1DzmYjCawYct6kfstCyUzU_kxIHnahGWD?usp=sharing)

# What needs to be done
Download the data above and split it into time series data. to get the following insights.

1. Which endpoint is called how many times
2. How many API calls were being made on per minute basis
3. How many API calls are there in total for each HTTP status code
# Rules/criteria
1. The entire app/project needs to be done as CLI. No server or browser should be needed
2. your code must be for NodeJS. so either write it in JS or in TS
3. Show all the data in a formatted table like following
4. Assignment must be submitted to your own github profile as public repo. just send us the link of that repo
┌──────────────┬────────────┬───────┐
│   (index)    │ statusCode │ count │
├──────────────┼────────────┼───────┤
│ Server Error │    500     │  23   │
│  Not found   │    404     │  23   │
│      OK      │    200     │ 1256  │
│ Not changed  │    304     │  50   │
└──────────────┴────────────┴───────┘                    
# How to up your selection chances? (Optional)
Use typescript
Comment your code properly
Have all edge cases handled
import the lowest amount of packages with the smallest size
proper readme and other instuction to run the code
