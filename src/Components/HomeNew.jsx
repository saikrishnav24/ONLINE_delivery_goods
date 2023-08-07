import Popular from "./Popular";
import Next from "./Other";
// import first from "./first.png";
// import second from "./second.png";

export default function Home() {
  return (
    <div className="App">
      <Popular />


      {/* <img
        src={second}
        style={{
          position: "absolute",
          transform: "scaleX(-1)",
          height: 600,
          right: 80,
          top: 0
        }}
        alt="pic"
        className="src"
      /> */}

      {/* <img
        src={first}
        style={{ position: "absolute", height: 700, width: 1100, right: 100, top: 550 }}
        alt="pic"
        className="src"
      /> */}
      <Next />
    </div>
  );
}