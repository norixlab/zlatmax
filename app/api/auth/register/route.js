import { dbConnect } from "@/utils/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    await dbConnect();
    const { firstName, lastName, email, password } = await req.json();

    const isExist = await User.findOne({ email });
    if (isExist) {
      return NextResponse.json(
        { error: "Такой пользователь уже существует" },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

    const { password: passwordHash, ...user } = newUser._doc;

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "😞 Что-то пошло не так! Ошибка регистрации." },
      { status: 500 }
    );
  }
};
