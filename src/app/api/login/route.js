import { connectToDB } from "@/app/helper/db";
import { getResponseMessage } from "@/app/helper/responseMessage";
import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    await connectToDB();
    // 1. checking user is present or not
    // console.log("aklsfjd;lajsflsdjfklsd;f");
    const res = await User.findOne({ email: email });
    if (res == null) {
      // toast
      // throw new error("User Not Found");

      return NextResponse.json(
        { message: "User Not Found", success: false },
        { status: 501 }
      );
    } else {
      //   console.log(res);
      //  2. checking the password is same or not
      const matched = bcrypt.compareSync(password, res.password);
      if (!matched) {
        return NextResponse.json(
          { message: "Password is Wrong", success: false },
          { status: 501 }
        );
      } else {
        // 3. Creating the JwtToken
        var token = jwt.sign(
          { _id: res._id, userName: res.name },
          process.env.JWT_KEY
        );
        // console.log(token);
        const response = NextResponse.json(
          { message: "User Found", success: true },
          { status: 200 }
        );
        //4. creating a cookie
        // Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
        response.cookies.set("auth-cookie", token, {
          expiresIn: "1d",
          httpOnly: true,
        });

        return response;
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error", success: false },
      { status: 500 }
    );
  }
}
