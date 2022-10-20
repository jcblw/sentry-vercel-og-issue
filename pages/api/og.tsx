import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const colors = {
  dark: "#353D42",
  black: "#000000",
  white: "#FFFFFF",
};

const ogImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontFamily: '"Work Sans", sans-serif',
          background: "white",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.dark,
          backgroundImage: `linear-gradient(45deg, ${colors.black}, ${colors.dark})`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              boxShadow: `0 0 0 16px 32px ${colors.dark}`,
              borderRadius: "40px",
              marginTop: "-8px",
            }}
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 0H8C3.58172 0 0 3.58172 0 8V32C0 36.4183 3.58172 40 8 40H32C36.4183 40 40 36.4183 40 32V8C40 3.58172 36.4183 0 32 0Z"
                fill="#353D42"
              />
              <path
                d="M20.2129 28.4259C24.7488 28.4259 28.4259 24.7488 28.4259 20.2129C28.4259 15.6771 24.7488 12 20.2129 12C15.6771 12 12 15.6771 12 20.2129C12 24.7488 15.6771 28.4259 20.2129 28.4259Z"
                fill="#EAE2EB"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
};

export default ogImage;
