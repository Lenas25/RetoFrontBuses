# Buses Data Front Challenge
It is a front-end application connected with api buses consuming all endpoints, first getting token to fetch each endpoint with their respective headers.

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Challenge Front Data Buses</h3>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://github.com/user-attachments/assets/0a27d73a-e4b8-4838-94ab-56d35d69d013)


This is a front end project based on consuming a bus api created earlier, I used React and Typescript, also making fetch per page improving the performance of the data call, also use from the environment variables to obtain the jwt token from the back to save it in the local Storage.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. 
* [![React][React]][React-url]
* [![Typescript][Typescript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To get the project you need to have an IDE to run React and Typescript.
* Visual Studio Code

### Installation

1. Get credentials to PostgreSQL database and put them into environment variables
2. Clone the repo
   ```sh
   git clone https://github.com/Lenas25/OracleNextChallengeLiterature.git
   ```
3. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin Lenas25/OracleNextChallengeLiterature.git
   git remote -v # confirm the changes
   ```
4. Install all dependencies
   ```sh
   npm install
   ```
5. Run the project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Here you can check the different functionalities and options that the program has to execute.

1. Authenticate to save the token
![image](https://github.com/user-attachments/assets/4447b6f9-dac4-46c4-9506-a85d93f8736e)

2. All data buses fetching in table
   </br>
![image](https://github.com/user-attachments/assets/0e1c3a57-e875-4616-b451-3cad3704a6a7)
   
3. Pagination according to the number of dataa
   </br>
![image](https://github.com/user-attachments/assets/a69339ac-e3c2-46b9-94d0-cad41fffd82e)

4. See with an alert details of each row in case the bus is active
   </br>
![image](https://github.com/user-attachments/assets/0edf878f-89de-4b01-96d5-e4ebfafce041)
![image](https://github.com/user-attachments/assets/4f327049-fe1d-4344-b35d-4fd333bda89b)

5. Front in case you don't authenticate
    </br>
![image](https://github.com/user-attachments/assets/8eea9194-e253-4f4c-ae10-90703ccd5849)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[React]: https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react&logoColor=white
[React-url]:https://es.react.dev/
[Typescript]: https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
