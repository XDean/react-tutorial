const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => setCount(c => c + 1)}>
        Click Me
      </button>
      <br/>
      <button onClick={() => setCount(0)}>
        Clear
      </button>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);