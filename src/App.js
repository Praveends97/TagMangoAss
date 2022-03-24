import './App.css'

const App = () => (
  <div className="container App-container">
    <div className="row no-gutters">
      <div className="col-12 col-md-6 box-B  bg-primary d-flex flex-column justify-content-center text-center">
        <h1 className="heading d-none d-md-block ">WIDTH=HEIGHT</h1>
        <h1 className="heading d-block d-md-none">
          HEIGHT
          <br />
          200PX
        </h1>
      </div>
      <div className="col-12 col-md-6">
        <div className="container">
          <div className="row ">
            <div className=" col-12 col-md-6 box-Y bg-warning d-flex flex-column justify-content-center text-center">
              <h1 className="heading  d-none d-md-block ">WIDTH=HEIGHT</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT
                <br />
                200PX
              </h1>
            </div>
            <div className=" col-12 col-md-6 bg-success box-G d-flex flex-column justify-content-center text-center">
              <h1 className="heading d-none d-md-block">WIDTH=HEIGHT</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT
                <br />
                200PX
              </h1>
            </div>
            <div className=" col-12 col-md-12 box-R bg-danger d-flex flex-column justify-content-center text-center">
              <h1 className="heading d-none d-md-block">WIDTH=HEIGHT/2</h1>
              <h1 className="heading d-block d-md-none">
                HEIGHT
                <br />
                200PX
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
