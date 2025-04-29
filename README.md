# 🚀 Collective Forecast Test Task

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **TailwindCSS V3**
- **Zustand**
- **Classnames**
- **DayJS**

## ⚡ Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

   ```sh
   git clone https://github.com/coldmelnyk/react__test-task__collective-forecast.git
   ```

   Or download the ZIP archive.

2. **Navigate to the project folder**

   ```sh
   cd react__test-task__collective-forecast
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm start
   ```

Now you can open the project in your browser at `http://localhost:5173/` 🚀

## ⚡ How auto-scroll to the last message was implemented?

Auto-scroll works by 'scrollIntoView' function which triggered in useEffect hook inside last Message component of the list in chat field, using useRef on the message's body.

## ⚡ Zustand > Redux

On such small projects, I'd prefer using Zustand as a state manager to avoid boilerplate code and increase my speed of coding.