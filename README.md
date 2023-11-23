# Quiz Maker Application - Frontend

## Description

The project is an application frontend developed to enable users to create, administer, and participate in quizzes. 

## Backend

[Backend repo](https://github.com/SamahZughaibi/java-project1-github-repo-sda)

## Getting Started

### Prerequisites
1. Node.js
2. Angular
3. Visual Studio
4. The [Backend repo](https://github.com/SamahZughaibi/java-project1-github-repo-sda) installed

### Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/SamahZughaibi/java-angular-project-sda.git
```

2. Navigate to the project directory:

```bash
cd java-angular-project-sda
```
3. Install Dependencies:

```bash
npm install
```
## Usage
### Development Server
You need to run the [backend application](https://github.com/SamahZughaibi/java-project1-github-repo-sda) first. Then, run this following command from the frontend repo.

```bash
ng serve
```

## Pages/Routes

- ### Welcome Page
This page is first shows up when you open the application. It contains the logo, and two buttons for login and register.
<br>
<details>
  <summary><i>Screenshot</i></summary>

  ![Welcome Page](/readmeImages/welcome-page.png)
</details>


- ### Login Page `/login`
This is where you can log in if you have an account. It will redirect you to `/home`.
<br>
<details>
  <summary><i>Screenshot</i></summary>

  ![Login Page](/readmeImages/login-page.png)
</details>


- ### Register Page `/register`
It's the page where you can register as a new user.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![Register Page](/readmeImages/register-page.png)
</details>


- ### Home (Take a quiz)  Page `/home`
Once you registered or logged in you will see the home page, which is also the "Take a Quiz" page. You can paste the quiz ID here to take the respective quiz.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![Home Page](/readmeImages/home-page.png)
</details>


- ### My Quizzes Page `/myQuizzes`
If you're looking to create quizzes this is where you'll work. You create quizzes, questions, and choices and then view and edit them.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![My Quizzes Page](/readmeImages/my-quizzes-page.png)
</details>


- ### Quiz Results Page `/quizResults`
When you click on "results" button on any of the quizzes from `/myQuizzes`, you'll see this page appear with results of the clicked quiz. The results are of the users who have taken the quiz.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![Quiz Results Page](/readmeImages/quiz-results-page.png)
</details>


- ### My Results Page `/myResults`
This page shows you your results to the quizzes you've taken.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![My Results Page](/readmeImages/my-results-page.png)
</details>


- ### Edit Name Page `/userInfo`
You can edit your name from this page.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![User Info Page](/readmeImages/user-info-page.png)
</details>

- ### Quiz Form Page `/takingQuizForm`
This page containg the quiz taking form where you'll be able to view the quiz and choose your answers then submit them.
<br>
<details>
  <summary><i>Screenshot</i></summary>
  
  ![Quiz Form Page](/readmeImages/quiz-form-page.png)
</details>

## Technologies Used
- Angular
- HTML
- CSS
- TypeScript
- Bootstrap

## Extra Links

- [Presentation Slides](https://docs.google.com/presentation/d/1w64MSftgfRvQ7-0RXFGhyXaeiiT3oQhAs4pe6dmlt_4/edit?usp=sharing)


## Future Work

- Client and server authentication.
- Enabling user to make and customize grades
- Providing a shareable quiz link.

## Team Members
Samah Alzughaibi
