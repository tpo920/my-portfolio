# Portfolio Website 
A simple portfolio template for students to display their personal skills, experience, and projects.

## 💾 Development
This project uses:
- [React.js](https://react.dev) & [Vite](https://vitejs.dev) for the front-end and server tooling
- [MUI](https://mui.com/) to build and style the application

## 🔧 Set-Up
After cloning your fork of this repository and navigating to its root folder, use these commands to run the application in your desktop

```sh
# Change to project directory
cd <project-name>

# To install required dependencies
npm install

# Locally run the production build
npm run dev

# Create a build & preview
npm run build
npm run preview
```
## 📑 Material UI (MUI) Concepts 
Material UI is an open-source React component library that includes a comprehensive collection of prebuilt components that are fully customisable.
Here are some of the core concepts covered to build this application:

### [sx prop](https://mui.com/system/getting-started/the-sx-prop/)
The sx prop is a core system that allows MUI components to easily be customisable and styled to each individuals need. It is a type of inline-styling that utilises CSS and theme-aware properties. Additionally, properties
associated with the sx prop support responsive and callback values. 

An example can be seen below:
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tpo920/assets/100402382/48a36bbc-ccb1-43e7-832a-480d83229dd2)


### [Themes](https://mui.com/material-ui/customization/theming/)
To customise the portfolio efficiently and consistently, I used MUI's theme component to create a custom theme as shown [here](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tpo920/blob/main/src/main.jsx) where I can define the colours and fonts I need for my website. These properties are easily called to style MUI components using the sx prop.

An example of calling theme-defined properties is shown below where the colour `primary.main` 
and the font `Poppins` is used to style this text:

![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tpo920/assets/100402382/b3db2556-44f3-4be5-bc9f-12b93ee6bb6b)

### [Box](https://mui.com/material-ui/react-box/)
The Box component is a generic container for grouping other components and essentially defined the layout and structure for the website. It is just like the `<div>` component however is more easy to use with 
the integration of the sx prop and access to defined-themes. An example of using this component can be shown in the [Home Page](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tpo920/blob/main/src/pages/Home.jsx) `line 45-52`, where the
Box is used to center and group other components.

### [Typography](https://mui.com/material-ui/customization/typography/)
The Typography component is an easy-to-use method to style text in the website. It allows for responsive text and uses the `variant` prop to easily set text to a header, subtitle, body and more like a word document. Additionally, it's 
font, font-size etc can be customised with the sx prop.

An example is shown below, where the variant `subtitile1` and `body1` are used:
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-tpo920/assets/100402382/043a5c24-e983-477f-bc95-9b547801e954)

### Further Material
In addition to these main concepts, there are many more components Material UI provides, found [here](https://mui.com/material-ui/all-components/) and the framework also provides
an icon library ([MUI Icons](https://mui.com/material-ui/material-icons/)) and a package for unreleased components ([MUI Lab](https://mui.com/material-ui/about-the-lab/)).


## 🌟 Acknowledgements
- [Bedimcode](https://www.youtube.com/c/Bedimcode) and [PedoTech](https://www.youtube.com/watch?v=x7mwVn2z3Sk&ab_channel=PedroTech) as design inspirations for this Portfolio
- [Waipapa Taumata Rau](https://www.auckland.ac.nz) (University of Auckland); The development of this repository is for the course [SOFTENG&nbsp;750](https://courseoutline.auckland.ac.nz/dco/course/SOFTENG/750) *Software Development Methodologies*.
