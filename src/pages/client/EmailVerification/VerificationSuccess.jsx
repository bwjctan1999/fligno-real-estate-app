export default function VerificationSuccess() {
  return (
    <div className="text-center items-center flex min-h-screen flex-col justify-center gap-5 p-4">
      <h3 className="text-5xl font-medium">
        Thank you for signing up at Turnkey!
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="m-3 h-24 w-24"
        fill="#008000"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 371.13"
      >
        <path d="M397 141.12c63.51 0 115 51.5 115 115.01 0 63.51-51.49 115-115 115s-115.02-51.49-115.02-115S333.49 141.12 397 141.12zM28.8 0h389.26c15.73 0 28.52 12.88 28.5 28.53l-.1 95.75c-7.58-2.84-15.46-5.04-23.59-6.55l.07-77.07-125.82 98.9 9.17 8.99c-3.03 2.55-5.94 5.24-8.75 8.03l-.09.1c-3.27 3.27-6.37 6.72-9.32 10.29l-10.89-10.69-42.14 35.87c-4.49 3.77-11.46 4.22-16.5.12l-44.24-36.1L39.45 282.69h219.28a140.64 140.64 0 0 0 6.72 23.6l-236.96.01C12.74 306.3 0 293.42 0 277.76L.24 28.52C.27 12.84 13.05 0 28.8 0zm-5.19 261.9 130.45-122.08L23.82 41.69l-.21 220.21zM42.65 23.6l183.96 141.87L400.69 23.6H42.65zM360.9 241.37l22.12 21.12 47.61-48.16c3.48-3.54 5.67-6.37 9.96-1.96l10.67 10.97c4.56 4.53 4.33 7.18.01 11.41l-60.3 59.37c-9.09 8.93-7.52 9.49-16.75.3l-33.51-33.33c-1.9-2.09-1.71-4.18.37-6.28l12.9-13.47c2.45-2.55 4.39-2.38 6.92.03z" />
      </svg>

      <p className="text-xl">Your account has been verified!</p>
    </div>
  );
}
