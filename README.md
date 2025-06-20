# Planning Components

-Header
-Body
-SideBar
-Button
-ButtonList
-MainContainer (for video)
-Video Container
-Video Card

# ToggleFunction

-Redux toolkit (for state management)

# fetch API Data from (Youtube api)

# Step-by-Step Guide: Creating and Restricting a Google API Key

Follow these instructions carefully to create a new API key and secure it for use in your web application.

# Part 1: Accessing Google Cloud Console and Project Setup

Go to Google Cloud Console:

Open your web browser and navigate to https://console.cloud.google.com/.

Sign in with your Google account.

Select or Create a Project:

In the top navigation bar, click on the project dropdown (it usually shows "My First Project" or the name of your last accessed project).

Click "New Project" to create a new one, give it a descriptive name (e.g., "YouTube Clone App"), and click "Create".

If you already have a project you want to use, select it from the list.

Enable Billing (if not already enabled):

While not strictly for API key creation, many Google APIs (including YouTube Data API v3) require a billing account. You'll often get free credits to start, but billing must be enabled.

In the left-hand navigation menu, go to "Billing".

Follow the prompts to link a billing account if you haven't already.

# Part 2: Enabling the YouTube Data API v3

Before you can use an API key, you need to enable the specific API you want to access for your project.

Navigate to API Library:

In the left-hand navigation menu, go to "APIs & Services" > "Library".

Search for and Enable the API:

In the search bar, type "YouTube Data API v3" and press Enter.

Click on the "YouTube Data API v3" result.

On the API details page, click the "ENABLE" button.

Wait a few moments for the API to be enabled for your project.

# Part 3: Creating Your API Key

Now that the YouTube Data API v3 is enabled, you can create the API key.

Go to Credentials:

In the left-hand navigation menu, go to "APIs & Services" > "Credentials".

Create API Key:

Click on the "+ CREATE CREDENTIALS" button at the top.

Select "API key" from the dropdown menu.

A dialog box will appear with your newly generated API key. Copy this key immediately!

Important: This is your API key. It's a long string of alphanumeric characters. Click "SHOW KEY" to reveal it if it's masked, and copy it.

Close the Dialog:

Click "Close" in the dialog box. Your new API key will now be listed on the "Credentials" page under "API Keys".

# Part 4: Restricting Your API Key (Crucial for Security!)

This is the most important part for securing your API key and preventing unauthorized usage. Leaving an API key "unrestricted" means anyone who finds it can use it, potentially incurring unexpected costs or hitting your quota limits.

Edit the API Key:

On the "Credentials" page, locate the API key you just created.

Click on the pencil icon (Edit API key) next to its name.

Rename the API Key (Optional but Recommended):

Give your API key a descriptive name (e.g., "YouTube Web App Key") so you know what it's for.

Set "Application restrictions": (From Unrestricted to Restricted)

Under the "Key restrictions" section, you'll see "Application restrictions". By default, it might be set to "None" (unrestricted).

Select "HTTP referrers (web sites)". This is the correct restriction type for a web application running in a browser.

In the "Website restrictions" section that appears:

Click "ADD AN ITEM".

For local development (if still needed):

http://localhost:\*

http://localhost:3000/\* (or the specific port your React app runs on, e.g., 3001, 5173, etc.)

http://127.0.0.1:\*

For your deployed Vercel application:

Click "ADD AN ITEM" again.

Add your exact Vercel deployment URL with a wildcard: https://youtube-clone-indol-five-82.vercel.app/*

It's good practice to also add the wildcard for subdomains if Vercel uses them or if you have custom domains: https://_.vercel.app/_ (though https://youtube-clone-indol-five-82.vercel.app/* is the most specific and usually sufficient).

Click "Done" after adding each referrer.

Set "API restrictions":

Under the "API restrictions" section, it might initially say "Don't restrict key" (unrestricted access to all APIs).

Select "Restrict key".

Click on the "Select APIs" dropdown.

Scroll through the list or use the search bar to find and select "YouTube Data API v3".

Click "OK".

Save Changes:

After setting both the application restrictions (HTTP referrers) and API restrictions (YouTube Data API v3), make sure to click the "SAVE" button at the bottom of the page.

# React Routing

-crateBrowseingRouter
-to config the router component

# Watch Component

-Dynamic Routing the Page (Reload)

# Debouncing

Debouncing is an optimization technique used to limit the rate at which a function is called. When an event (like typing in a search box or resizing a window) fires rapidly, debouncing ensures that the associated function is only executed after a certain period of inactivity.

# Why is Debouncing Useful in React?

In React, components often react to user input or external events. Without debouncing, functions tied to these events can be called excessively, leading to:

-Performance Issues: Rapid re-renders, heavy computations, or frequent DOM manipulations can slow down your application.

-Excessive API Calls: Typing in a search bar without debouncing could trigger an API request for every single keystroke, leading to unnecessary network traffic and potentially exceeding API rate limits.

-Poor User Experience: UI elements might flicker, lag, or behave erratically due to constant updates.

Debouncing solves this by introducing a delay. It says, "Don't run this function until X milliseconds have passed since the last time this event fired."

Typing slow = 200ms
Typing fast = 150ms

performance like if someone
-type iphone pro max = 14 letter \* 1000 = 14000

with debouncing
-type iphone pro max = 3 API calls \* 1000 = 3000

Debouncing with 200ms
-if diff b/w 2 key stokes is < 200ms => DECLINE API Call

- > 200ms make an api call

# GOOGLE SUGGESTION API LINK SHOULD TYPE LIKE THIS

-youtube search suggestion api
-GO TO stack overflow
-Or even more recent: http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

# DEBOUNCING IN REACT

Key Press - i
 -render the component
 -useEffect() call
 -start timer => make an api call after 200ms


Key Press -ip
 -destory the componet (useEffect return method (componentWillUnMount))
 -re-render the component
 -useEffect() call
 -start timer => make an api call after 200ms => but the timer was diffrent bcoz the state variable changes(useEffect & state)

SetTimeout(200) - declines

SetTimeout(200) - make an API call

# Cache functionailty in Redux Level
 -Searching data in input search bar

# Comments 
 -we added end level neasted comments  


# Live Chat 
 -LiveChat & -LiveMessageChat Componnet
 we create the live chat with using of random names and random messages, emojis also 