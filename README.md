<h1 align="center">Welcome to Spontan❗️</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-alpha-orange" />
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Description](#description)
  - [The Idea](#the-idea)
  - [Market Analysis](#market-analysis)
  - [Objective and Features](#objective-and-features)
  - [Prototyping](#prototyping)
    - [1. Paper Prototype](#1-paper-prototype)
    - [2. Low-Fidelity Prototype](#2-low-fidelity-prototype)
    - [3. High-Fidelity Prototype (AUTHOR'S VERSION)](#3-high-fidelity-prototype-authors-version)
- [Development Process](#development-process)
- [Install](#install)
- [Usage](#usage)
- [Known Issues and Future Work](#known-issues-and-future-work)
- [Conclusions](#conclusions)
- [Author](#author)

## Introduction

Spontan originated as a project for KTH's course [ID2216 Developing Mobile Applications](https://www.kth.se/student/kurser/kurs/ID2216?l=en). In it, the students work in groups to develop an app from scratch, using the tools and frameworks they find most convenient.

The version developed for said subject (see commit [7a86bdc](https://github.com/GuilleObe8/Spontan/commit/7a86bdc8b5235443b3a8e558095445cc7fedd2f7)) was made in collaboration with two other students—huge shout-out to Carolina and Mayte for their amazing work, it was a pleasure collaborating with them—in less than three months, using React Native and Expo. None of us had prior experience with web or mobile development, so we learned from zero, but we were still quite proud of our final result.

After completing the subject, I became passionate about fullstack development, and during the summer of 2024, I decided to redevelop the app from scratch. This time I wanted to make sure that it was fully functional and intended to develop a working MVP. The version that you're about to visit is the result of the last six months of work in the app during my free time, prioritizing responsiveness and enabled functionality rather than the noble art of pixel-perfect layouts for exactly one phone model from 2010 _(no pun intended)_.

## Description

### The Idea

After some brainstorming, Carolina, Mayte, and I came up with up to eleven different ideas of apps that we would like to have on our phones, and that we didn't think existed. Some of them were apps related to working out, others to productivity tracking, and even one for becoming a "better baker by having a designated calculator"—not sure about what we meant by this...

Spontan, which didn't have a name at the time, was the idea that stood out above the rest. We thought of it as "a tool to enable spontaneous activities." In other words, a social media app focusing on spontaneous communication and quick replies among friends. The design should be minimal and aim to be straight to the point, without distractions for the user.

We anticipated that the app would have a great impact on the ~~Swedish~~global market—assuming people don't schedule their spontaneity three weeks in advance.

### Market Analysis

We conducted a market analysis consisting of a survey to collect quantitative data on demographic information, current usage of social media applications, and the necessary features for an application focused on spontaneous activities, as well as six semi-structured interviews to gather qualitative data.

The information extracted from the survey, which had 85 responses from people around the globe, including Swedish, Spanish, Mexican, and even Belgian people, showcased that many respondents associate spontaneous activities with making decisions, such as going on unplanned trips, rather than their everyday life plans. Alternatively, some participants referred to activities like going out, visiting the cinema, enjoying a night at a bar, or hosting dinner parties as examples of spontaneity.

Some key insights extracted from the full market analysis were:

- Spontaneous individuals often prefer **solo activities**.
- **Cultural factors** and **social media** influence spontaneous decisions.
- Planning **spontaneous group activities** can contradict the essence of spontaneity.
- **Quick responses** from friends or family are expected when spontaneity takes place.

Regarding alternative apps available on the market, the most notable one we found was [Sponty](https://sponty.app). It is an application for creating spontaneous events that all users registered in the application can respond to if they are close by sending a video message. The app can therefore be used to connect with both friends and strangers, as long as they are nearby.

The main differentiator of Spontan is that it is exclusively aimed towards friends and groups of people who already know each other. Moreover, we aimed to create a digital experience for spontaneous users that resembled a natural interaction, achieved by the simplicity of our app and the ability to easily respond to requests (as opposed to Sponty, in which a video has to be sent).

In other regular messaging apps, the user cannot control the response time to an invitation, even if the organizing needs to be quick, giving Spontan a big advantage.

### Objective and Features

In response to the analysis, the research question that we asked ourselves was:

> How might we create a digital experience for **spontaneous users** that resembles a **natural interaction**?

Based on the obtained information, we decided to create an application that targeted people already considering themselves as being spontaneous between 18-34. The aim was to smooth communication and provide the users with a digital experience that would mimic a spontaneous task naturally occurring when living together, which translates into instant reply and minimal coordination.

Therefore, the following features were to be implemented:

- Several notification response options + response flexibility.
- Participants visibility.
- Customizable notifications.
- _Additional features after A/B testing and feedback._

### Prototyping

> [!IMPORTANT]  
> Neither the paper prototype nor the low fidelity one can be shown for privacy reasons, but a brief description is provided.
>
> The high-fidelity prototype displayed below is a modified version of the original one elaborated for the initial idea of the project. The modified version was created by the [author](#author) of this GitHub repo, and it's the one being used as a reference for the current development of the app.

#### 1. Paper Prototype

The prototype featured three distinct tabs to enhance user experience:

- The first tab, _Friends_, displayed a contact list. This would make it easy for users to connect with their friends within the app.
- The second tab, _Activities_, listed spontaneous activities. It would also let users see which friends had responded to their activity invitations.
- The third tab, _Memories_, was meant to be a unique space for storing and viewing photos and memories from friends' activities throughout the day.

Additionally, the prototype included a notification system, which allowed users to alert their friends when they sent an invitation to a spontaneous activity, ensuring prompt and effective communication.

A customization page for spontaneous activities was also introduced, allowing users to tailor their invitations to their preferences.

#### 2. Low-Fidelity Prototype

The initial Figma prototype presented a three-page layout, each serving a unique purpose:

- The first page, labeled _Friends_, showcased a user-friendly contact list, providing easy access to connections within the app. Additionally, the user had the possibility to add new friends.
- On the _Main_ page, the user could see the activities to which he/she/they had been invited.
- On the _Activities_ page, the user could visualize their activities feed and see who had answered their proposed activities and what was the answer.

Moreover, when creating an event, users could tailor it according to their preferences. This customization involved adding the event's title and a brief description, as well as categorizing the event to reflect its nature. The location and time of the event could also be specified, and the ability to set a deadline by which the invited friends should respond was included. Lastly, the user could choose which friends to invite.

The activity details page, accessible to the users receiving an invitation to an activity, included essential details such as the event's date, time, and location. Additionally, it provided a map alongside the address to the venue. The user could respond with the respective _Yes!_ or _No_ buttons to confirm or decline the invitation. Alternatively, they could request more details via their preferred messaging app if further information would be needed.

<details><summary><strong>User Testing</strong></summary>

The low-fidelity prototype was shown to multiple users, and a quick explanation of what each screen aimed for was given. These were the most critical reviews:

> This application strikes an impressive balance between ease of use and fostering spontaneity. Its simple process is particularly helpful for quickly organizing plans, significantly when responses from friends are delayed or when coordinating group activities. The feature that displays who are attending simplifies decision-making and enhances group consensus. Additionally, integrating with Google Maps is a standout aspect, as it allows me to gauge travel time to the event location, aiding in more informed and prompt decision-making. Overall, the application fulfills its purpose by simplifying the planning process, thus enabling a more spontaneous and less burdensome experience. — User 1

> I really enjoy what this application aims to do because I end up doing a lot of activities by myself when I don't get fast enough replies. I would like to see a version with more colors and that has integrated functionality. — User 2

</details>

#### 3. High-Fidelity Prototype (AUTHOR'S VERSION)

Building upon the initial low-fidelity prototype, a higher-fidelity iteration was created in Figma by introducing additional screens that delve deeper into various user pathways.

Within the high-fidelity prototype, users encounter four distinct screens dedicated to the authentication process: Login, Register, Forgot Password, and Change Password.

<details><summary><i>Expand to see the image</i></summary>

![Screenshot of the authentication workflow screens prototypes created in Figma.](/assets/figma/authentication.png)

</details>

Upon successful login, users are redirected to the Main screen, featuring a user-friendly navigation bar facilitating access to the Friends and Activities screens. Furthermore, a large button is displayed at the bottom of the page, empowering users to effortlessly create new events.

<details><summary><i>Expand to see the image</i></summary>

![Screenshot of the main workflow screens prototypes created in Figma.](/assets/figma/main.png)

</details>

In addition, users can search for a specific user profile and send new friend requests from the Add New Friends screen. Clicking on a profile summary will display the full profile details via the User Profile screen.

<details><summary><i>Expand to see the image</i></summary>

![Screenshot of the friends workflow screens prototypes created in Figma.](/assets/figma/friends.png)

</details>

For further customization, a button in the top left corner of the main workflow provides access to the Profile and Settings screen, from which users can navigate to the Edit Profile screen.

<details><summary><i>Expand to see the image</i></summary>

![Screenshot of the settings workflow screens prototypes created in Figma.](/assets/figma/settings.png)

</details>

Lastly, the appearance of the screens designed to send a new activity or access the details of a specific activity can be seen below, alongside the screen from which users can select which friends are going to be invited to a proposed activity.

<details><summary><i>Expand to see the image</i></summary>

![Screenshot of the activities workflow screens prototypes created in Figma.](/assets/figma/activities.png)

</details>

These interconnected screens were meticulously linked within Figma in preparation for user testing. A visually appealing graphic profile was created, characterized by a dark theme complemented by pastel colors for finer details, ensuring a visually clean and engaging user experience.

<details><summary><strong>User Testing via Figma</strong></summary>

It was decided to carry out user testing using the Think Aloud Protocol with two potential users. They were asked to talk out loud while navigating through the app and guessing what different components did.

Some key insights extracted from the testing were:

- Changing the theme colors to add more contrast between text and background.
- Adding a bright theme.
- Adding "responded" to clarify what the activities progress bar means.
- Changing the color of active timers for the remaining response time to increase the sensation of urgency.
- Matching the color of the category text on the activities to the one used in the Send Activity screen.
- Changing the names of Main and Activities to clarify what each one refers to.
</details>

## Development Process

As mentioned in the [Introduction](#introduction), the new version of Spontan was built from the ground up, with all previous code deleted and replaced by a fresh Expo project.

For simplicity, it was decided to start by designing the frontend of the whole app, even if it meant to have hardcoded Dummy Data to test expected behaviors.

As an overview of the commit history, the designing process started with creating some essential components of the app, such as the [Logo](src/components/Logo.js) or the [RoundedTextButton](src/components/RoundedTextButton.js) components. This process was followed by the full implementation of the login workflow screens, including the creation of extensively used components such as [Activity_A](src/components/Activity_A.js) or [TextBox](src/components/TextBox.js), and the addition of the MainNavigator of the app, later on renamed to [TopTabNavigator](src/routes/TopTabNavigator.js).

Afterwards, the [Friends](src/screens/Friends.js) page was redesigned, and the [AddFriends](src/screens/AddFriends.js), [Profile](src/screens/Profile.js), [Settings](src/screens/Settings.js), [EditProfile](src/screens/EditProfile.js), [ActivityDetail](src/screens/ActivityDetail.js), [InviteFriends](src/screens/InviteFriends.js), [ProfileDetail](src/screens/ProfileDetail.js), and [SendActivity](src/screens/SendActivity.js) screens were implemented.

Later, [StackNavigator](src/routes/StackNavigator.js) was included, allowing the authentication workflow to be introduced into the app, ensuring that only specific screens can be accessed depending on whether the user is signed in or not, along with the missing parts of the navigation within the app. Modals were then added—some of which were later removed due to unintended behaviors—marking the completion of the app's **initial** visual interface.

> [!NOTE]  
> Spontan has always been intended to be used across different platforms, including iOS, Android, and web browsers. To fulfill this purpose, especially designed libraries such as [react-native-keyboard-aware-scroll-view](https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view) or [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/) have been carefully used during the whole design process.

The development has recently moved to its second stage, where all the backend behavior of the app will be added. The first update that has been made on this matter is the integration with [Supabase](https://supabase.com), allowing the activation of a working authentication system.

## Install

To run Spontan locally, start by cloning this repository:

```sh
git clone https://github.com/GuilleObe8/Spontan.git
```

Once the repo has been successfully cloned, the required dependencies must be installed using [npm](https://nodejs.org/en/). The command below will install all modules listed as dependencies in [package.json](package.json):

```sh
npm install
```

It is also convenient to make sure that the installed dependencies versions are correct and that the latest Expo version is installed. This can be easily done by executing:

```sh
npx expo install --fix
```

## Usage

After all the dependencies are installed, run the following command to start the project and get Expo running:

```sh
npx expo start
```

The app can be opened in various ways. The easiest one is by downloading the [Expo Go](https://expo.dev/go) app on a smartphone and scanning the QR code shown on the terminal once the project starts. Another easy alternative is to open the application in the web browser by pressing the **w** key in the terminal window.

Once the app is launched, the [Login](src/screens/Login.js) screen will be displayed. From there, the user can navigate to the [Register](src/screens/Register.js) and [Forgot Password](src/screens/src/screens/ForgotPassword.js) screens.

> [!IMPORTANT]  
> The Login, Register, and Forgot Password backend functionalities are yet to be implemented.
>
> To access the rest of the app, the boolean state _isSignedIn_ (**line 22** of **[StackNavigator](src/routes/StackNavigator.js)**) must be manually set to **true**.

As of January 31, 2025, the user can navigate through all the screens available on the app introduced in the section [High-Fidelity Prototype](#3-high-fidelity-prototype-authors-version). However, essential features, such as the creation of new activities or their removal, have not yet been implemented.

This means that, for example, if an activity is clicked on, the app will navigate to the details screen of said activity, but nothing else can be done within that screen besides pressing the buttons at the bottom. Likewise, clicking on a user's preview will open the user's details page. Some confirmation modals will be shown, such as when clicking on the **Delete event** button of a sent activity or clicking on the **cross icon** located in the top left corner of the [Edit Profile](src/screens/EditProfile.js) screen, but their intrinsic operation is not enabled at the moment.

To stop the local Expo server from running, press Ctrl+C on the terminal window.

> [!TIP]  
> For more information on how to test the app—including on a simulator—please refer to the [Expo Documentation](https://docs.expo.dev/get-started/set-up-your-environment/).

## Known Issues and Future Work

I want to emphasize that all the React Native knowledge I have comes from self-learning. As a result, there may be some bugs or _unconventional_ coding practices in the code. However, since I started the reimplementation, I have been carefully refining the code to minimize such problems. My focus has been on writing clean, reliable, well-structured code, following best practices to ensure a solid and maintainable foundation for Spontan.

Said so, in the [TODO](todo.txt) file, a list of the next tasks I intend to work on can be seen. This can also give an idea of the known bugs the application has and how am I planning to fix them.

Regarding future work, some of the aspects that should be worked on include:

- Implementing the remaining backend services (full integration with Supabase, push notifications, dynamic rendering, etc.)
- Testing and debugging, especially in different types of devices and platforms.
- Adding potential features like social media integrations, themes, etc.

## Conclusions

Currently, the market lacks an option to effortlessly coordinate spontaneous activities with friends. While there are apps for conducting such activities with strangers, Spontan stands out as a unique offering in the app market. Spontan signifies a revolutionary leap in social media engagement, placing spontaneity at the forefront and simplifying communication among friends and family.

Through the carried out user testing, it's been confirmed that the design of the app effectively tackles users' challenges when digitally organizing spontaneous activities. With Spontan, users could seamlessly connect with friends and rely on digital interactions that are both efficient and rewarding.

If you have made it to this part of the document, congratulations on staying this long, and thank you for your interest in the project. May you have any _spontaneous_ questions, do not hesitate to contact me.

## Author

**Guillermo Obelleiro Monleón**

- GitHub: [@GuilleObe8](https://github.com/GuilleObe8)
- LinkedIn: [Guillermo Obelleiro Monleón](https://linkedin.com/in/guillermoobelleiromonleon)
- Email: [guilleobe8@gmail.com](mailto:guilleobe8@gmail.com)
