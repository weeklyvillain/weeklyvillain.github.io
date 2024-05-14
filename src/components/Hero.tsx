export const Hero = (): JSX.Element => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Welcome!</h1>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id justo sit amet dolor efficitur <br /> egestas vitae in duiasd sad asdasd asd asd </p>
            </div>
        </div>
    </div>
  );
}