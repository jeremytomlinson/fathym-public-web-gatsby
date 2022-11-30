import * as React from "react"
import photos_logo from "../images/photos_logo.png"
import ateam from "../images/a-team.jpg"
import actionbronson from "../images/actionbronson.jpg"
import bangarang_pimpire from "../images/bangarang-pimpire.jpg"
import bicycle_kick from "../images/bicycle_kick.jpg"
import bigbrother from "../images/bigbrother.jpg"
import billydillinger from "../images/billydillinger.jpg"
import butterfly_fractal from "../images/butterfly_fractal.jpg"
import caps_lock from "../images/caps-lock.jpg"
import carterbeauford from "../images/carterbeauford.jpg"
import clutch_neil from "../images/clutch-neil.jpg"
import coach_nelson from "../images/coach_nelson.jpg"
import dannycarey from "../images/dannycarey.jpg"
import davelombardo from "../images/davelombardo.jpg"
import dead_cross from "../images/dead_cross.jpg"
import dillinger from "../images/dillinger.jpg"
import duckseason_rabbitseason from "../images/duckseason_rabbitseason.jpg"
import epic_sax_guy from "../images/epic_sax_guy.jpg"

// styles
const pageStyles = {
  color: "#232129",
  padding: 20,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#950efb",
}
const flexbox = {
  display: "flex",
  flexFlow: "row wrap",
}
const margintwo = {
  margin: 2,
}
const header = {
  margin: "0",
	textAlign: "center",
	padding: "10px 0px 10px 0px",
}
const headerImg = {
  maxWidth: "100%",
  height: "auto",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={header}>
          <img style={headerImg} src={photos_logo} alt="PHOTOS" />
          <div style={flexbox}>
              <img src={actionbronson} width="523.4" height="393.5" style={margintwo} alt="" />
              <img src={ateam} width="523.4" height="393.5" style={margintwo} alt="" />
              <img src={bangarang_pimpire} width="523.4" height="393.5" style={margintwo} alt="" />
              <img src={bicycle_kick} width="504.3" height="379.2" style={margintwo} alt="" />
              <img src={bigbrother} width="379.2" height="379.2" style={margintwo} alt="" />
              <img src={billydillinger} width="504.3" height="379.2" style={margintwo} alt="" />
              <img src={butterfly_fractal} width="379.2" height="379.2" style={margintwo} alt="" />
              <img src={caps_lock} width="400.7" height="400.7" style={margintwo} alt="" />
              <img src={carterbeauford} width="300.5" height="400.7" style={margintwo} alt="" />
              <img src={clutch_neil} width="532.9" height="400.7" style={margintwo} alt="" />
              <img src={coach_nelson} width="549.5" height="413.2" style={margintwo} alt="" />
              <img src={dannycarey} width="469.6" height="353.1" style={margintwo} alt="" />
              <img src={davelombardo} width="469.6" height="353.1" style={margintwo} alt="" />
              <img src={dead_cross} width="353.1" height="353.1" style={margintwo} alt="" />
              <img src={duckseason_rabbitseason} width="196.8" height="393.5" style={margintwo} alt="" />
              <img src={dillinger} width="608.3" height="304.2" style={margintwo} alt="" />
              <img src={epic_sax_guy} width="404.6" height="304.2" style={margintwo} alt="" />
          </div>
      </div>
    </main>
  )
}

export default IndexPage
