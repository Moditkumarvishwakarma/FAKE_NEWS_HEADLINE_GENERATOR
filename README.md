# Fake News Headline Generator

A standalone, simple web application that generates funny, non-sensical "Fake News" headlines by selectively combining random celebrities, places, and actions from a local dataset.

## ✨ Features
- **Instant Generation**: Creates random funny sentences instantly on button click.
- **Responsive & Premium UI**: Features dark mode, premium glassmorphism graphical components, and micro-animations for a beautiful look.
- **Locally Hosted (No Server Required)**: Runs entirely locally in your web browser using pure HTML/CSS/Vanilla JavaScript, completely eliminating the need for a background Python server.

## 🛠️ Project Structure
- `index.html`: The main web page view.
- `style.css`: Custom frontend styling with gradients and transitions.
- `script.js`: Contains the logic to compose random headlines upon interface interaction.
- `main.py`: The data compiler script. It processes your dataset into a format correctly readable by the web browser.
- `data.csv`: Your raw data bank of vocabulary words.
- `data.js`: The auto-generated file outputted by `main.py`.

## 🚀 How To Run

Because this project is built as a static website, you don't need to boot up a backend application to run it.

### 1. Build the Data Source (Optional)
If you ever add new names, places, or actions to your `data.csv` file, you need to compile them before viewing them on the website. To do this, open your terminal and simply run:

```bash
python main.py
```
*(This command instantly transforms `data.csv` into a Javascript-readable `data.js` module. If you just downloaded or generated the project, I have already done this step for you!)*

### 2. View the Website
Simply locate the project folder in your computer's File Explorer, and **double-click the `index.html` file**! 

It will instantly open in your default browser natively. You can also use an extension like VS Code's "Live Server" if preferred.
