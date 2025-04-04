// const express = require('express');
// const router = express.Router();
// const FoodCombo = require('./model/UserItem'); 
// const { comboValidationSchema } = require("./validation");
// const User = require('./model/Users');


// const validateRequest = (schema) => (req, res, next) => {
//   const { error } = schema.validate(req.body, { abortEarly: false });
//   if (error) {
//     return res.status(400).json({
//       message: "Validation failed",
//       errors: error.details.map((detail) => detail.message),
//     });
//   }
//   next();
// };

// router.post('/combos', validateRequest(comboValidationSchema), async (req, res) => {
//   try {
//     const { comboName, ingredients, description, votes, submittedBy } = req.body;
//     const newCombo = new FoodCombo({ comboName, ingredients, description, votes, submittedBy });
//     const savedCombo = await newCombo.save();
//     res.status(201).json(savedCombo);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.get('/combos', async (req, res) => {
//   try {
//     const combos = await FoodCombo.find();
//     res.json(combos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.get('/combos/:id', async (req, res) => {
//   try {
//     const combo = await FoodCombo.findById(req.params.id);
//     if (!combo) {
//       return res.status(404).json({ message: 'Combo not found' });
//     }
//     res.json(combo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.put('/combos/:id', validateRequest(comboValidationSchema), async (req, res) => {
//   try {
//     const { comboName, ingredients, description, votes, submittedBy } = req.body;
//     const updatedCombo = await FoodCombo.findByIdAndUpdate(
//       req.params.id,
//       { comboName, ingredients, description, votes, submittedBy },
//       { new: true }
//     );
//     if (!updatedCombo) {
//       return res.status(404).json({ message: 'Combo not found' });
//     }
//     res.json(updatedCombo);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.delete('/combos/:id', async (req, res) => {
//   try {
//     const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
//     if (!deletedCombo) {
//       return res.status(404).json({ message: 'Combo not found' });
//     }
//     res.json({ message: 'Combo deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Endpoint to get all users for the dropdown menu
// router.get('/users', async (req, res) => {
//   try {
//     const users = await User.find(); // Get all users
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Endpoint to get food combos created by a particular user
// router.get('/foodCombos/:userId', async (req, res) => {
//   try {
//     const foodCombos = await FoodCombo.find({ created_by: req.params.userId }).populate('created_by');
//     res.json(foodCombos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const FoodCombo = require("./model/UserItem");
// const { comboValidationSchema } = require("./validation");
// const User = require("./model/Users");

// // Multer configuration for image uploads
// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Image Upload Route
// router.post("/upload", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }
//   res.json({ imageUrl: `/uploads/${req.file.filename}` });
// });

// const validateRequest = (schema) => (req, res, next) => {
//   const { error } = schema.validate(req.body, { abortEarly: false });
//   if (error) {
//     return res.status(400).json({
//       message: "Validation failed",
//       errors: error.details.map((detail) => detail.message),
//     });
//   }
//   next();
// };

// // Create Food Combo with Image
// // router.post("/combos", upload.single("image"), validateRequest(comboValidationSchema), async (req, res) => {
// //   try {
// //     const { comboName, ingredients, description, votes, submittedBy } = req.body;
// //     const image = req.file ? `/uploads/${req.file.filename}` : "";
// //     const newCombo = new FoodCombo({ comboName, ingredients, description, votes, submittedBy, image });
// //     const savedCombo = await newCombo.save();
// //     res.status(201).json(savedCombo);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });

// router.post("/combos", upload.single("image"), validateRequest(comboValidationSchema), async (req, res) => {
//   try {
//     const { comboName, ingredients, description, votes, submittedBy, imageUrl } = req.body;

//     // If a new file is uploaded, use it. Otherwise, use the existing URL.
//     const image = req.file ? `/uploads/${req.file.filename}` : imageUrl || "";

//     const newCombo = new FoodCombo({ comboName, ingredients, description, votes, submittedBy, image });
//     const savedCombo = await newCombo.save();

//     res.status(201).json(savedCombo);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Update Food Combo with Image
// router.put("/combos/:id", upload.single("image"), validateRequest(comboValidationSchema), async (req, res) => {
//   try {
//     const { comboName, ingredients, description, votes, submittedBy } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    
//     const updatedCombo = await FoodCombo.findByIdAndUpdate(
//       req.params.id,
//       { comboName, ingredients, description, votes, submittedBy, image },
//       { new: true }
//     );
    
//     if (!updatedCombo) {
//       return res.status(404).json({ message: "Combo not found" });
//     }
//     res.json(updatedCombo);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get Food Combos
// router.get("/combos", async (req, res) => {
//   try {
//     const combos = await FoodCombo.find();
//     res.json(combos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get Single Food Combo
// router.get("/combos/:id", async (req, res) => {
//   try {
//     const combo = await FoodCombo.findById(req.params.id);
//     if (!combo) {
//       return res.status(404).json({ message: "Combo not found" });
//     }
//     res.json(combo);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete Food Combo
// router.delete("/combos/:id", async (req, res) => {
//   try {
//     const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
//     if (!deletedCombo) {
//       return res.status(404).json({ message: "Combo not found" });
//     }
//     res.json({ message: "Combo deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all users for dropdown
// router.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get food combos created by a specific user
// router.get("/foodCombos/:userId", async (req, res) => {
//   try {
//     const foodCombos = await FoodCombo.find({ created_by: req.params.userId }).populate("created_by");
//     res.json(foodCombos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const FoodCombo = require("./model/UserItem");
const { comboValidationSchema } = require("./validation");
const User = require("./model/Users");

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Image Upload Route
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }
  next();
};

// Create Food Combo with Image
router.post("/combos", upload.single("image"), validateRequest(comboValidationSchema), async (req, res) => {
  try {
    const { comboName, ingredients, description, votes, submittedBy, imageUrl } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : imageUrl || "";
    
    const newCombo = new FoodCombo({ comboName, ingredients, description, votes, submittedBy, image });
    const savedCombo = await newCombo.save();
    res.status(201).json(savedCombo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Food Combo with Image
router.put("/combos/:id", upload.single("image"), validateRequest(comboValidationSchema), async (req, res) => {
  try {
    const { comboName, ingredients, description, votes, submittedBy } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    
    const updatedCombo = await FoodCombo.findByIdAndUpdate(
      req.params.id,
      { comboName, ingredients, description, votes, submittedBy, image },
      { new: true }
    );
    
    if (!updatedCombo) {
      return res.status(404).json({ message: "Combo not found" });
    }
    res.json(updatedCombo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Food Combos
router.get("/combos", async (req, res) => {
  try {
    const combos = await FoodCombo.find();
    res.json(combos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/combos/:id", async (req, res) => {
  try {
    const combo = await FoodCombo.findById(req.params.id);
    if (!combo) {
      return res.status(404).json({ message: "Combo not found" });
    }
    res.json(combo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/combos/:id", async (req, res) => {
  try {
    const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
    if (!deletedCombo) {
      return res.status(404).json({ message: "Combo not found" });
    }
    res.json({ message: "Combo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/foodCombos/:userId", async (req, res) => {
  try {
    const foodCombos = await FoodCombo.find({ created_by: req.params.userId }).populate("created_by");
    res.json(foodCombos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
