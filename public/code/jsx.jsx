const App = () => (
  <div>
    <h1 style={{fontStyle: 'italic'}}>
      Hello
    </h1>
    <h2 align={'right'}>
      World
    </h2>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);