import carImage from "../../assets/car.png";

export default function Car() {
  return (
    <img
      id="car"
      src={carImage}
      alt="McLaren Car"
      className="absolute top-0 left-0 h-[220px] z-10"
    />
  );
}