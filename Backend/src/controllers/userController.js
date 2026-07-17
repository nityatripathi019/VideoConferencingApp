import { User } from "../modals/userModel.js";
import httpStatus from "http-status";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";


const login = async (req, res) => {

  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: "Please provide username and password" });
  }

  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    user.token = token;
    await user.save();

    return res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};



const register = async function (req, res) {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ username });
    console.log(existingUser);

    if (existingUser) {
      return res.status(httpStatus.FOUND).json({ mesaage: "User exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword
    })

    await newUser.save();

    res.status(httpStatus.CREATED).json({ message: "User registerd" });

  } catch (e) {
    res.json({ message: `Something went wrong ${e}` });
  }
}


export { login, register };