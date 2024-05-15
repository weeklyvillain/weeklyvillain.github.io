import { useEffect, useState,  } from "react";

export const Hero = (): JSX.Element => {

  const [showText, setshowText] = useState(false);
  const [showImage, setshowImage] = useState(false);

  useEffect(() => {
    // Delay the animation
    setTimeout(() => {
      setshowText(true);
    }, 200);
    // delay the animation for the image
    setTimeout(() => {
      setshowImage(true);
    }, 500);
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="" className={`${showImage ? "opacity-100 translate-x-10" : "opacity-0 translate-x-32"}` + " max-w-sm rounded-lg shadow-2xl duration-1000	transition-all ease-out"} />
            <div>
              <h1 className={`${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}` + " text-5xl font-bold duration-700	transition-all ease-out"}>Welcome!</h1>
              <p className={`${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}` + " py-6 duration-700 transition-all ease-out"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id justo sit amet dolor efficitur <br /> egestas vitae in duiasd sad asdasd asd asd </p>
            </div>
        </div>
    </div>
  );
}