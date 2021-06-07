const App = () => {
  const style = {fontSize: 30}
  const who = 'XDean'
  return (
    <div>
      <span style={style}>
        Hello
      </span>
      <span>
        {who}
      </span>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);