import URL from "../model/urlmodule.js";

export const createUrl = async (req, res) => {
  try {
    const { url } = req.params;
    console.log("url", url);
    const user = await URL.find(url);
    console.log("user", user);
    const newUrl = new URL({
      url: user.url,
    });
    await newUrl.save();

    // const post = await URL.find();
    res.status(201).json(newUrl);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
