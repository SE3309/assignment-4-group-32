const express = require('express');
const router = express.Router();

const gemController = require('../database/dbGem.js');
const linkController = require('../database/dbLink.js');
const metalController = require('../database/dbMetal.js');
const necklaceController = require('../database/dbNecklace.js');
const orderController = require('../database/.dbOrderjs');
const productController = require('../database/dbProduct.js');
const ringController = require('../database/dbRing.js');
const userController = require('../database/dbUser.js');

router.get("/api/secure/user/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userController.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
});



router.post("/api/secure/products", async (req, res) => {
    const { name, mass, price, metalId, gemId, necklaceId, ringId, creatorId } = req.body;
    const newProduct = { name, mass, price, metalId, gemId, necklaceId, ringId, creatorId };

    try {
        await productController.addProduct(newProduct);
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding product" });
    }
});

router.put("/api/secure/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, mass, price, metalId, gemId, necklaceId, ringId, creatorId } = req.body;

    const updatedProduct = { 
        productId: id, 
        name, 
        mass, 
        price, 
        metalId, 
        gemId, 
        necklaceId, 
        ringId, 
        creatorId 
    };

    try {
        await productController.updateProduct(updatedProduct);
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating product" });
    }
});

router.post("/api/secure/orders", async (req, res) => {
    const { customerId, startDate, totalPrice, totalMass, status, products } = req.body;
    const newOrder = { customerId, startDate, totalPrice, totalMass, status, products };

    try {
        await orderController.addOrder(newOrder);
        res.status(201).json({ message: "Order added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding order" });
    }
});

router.put("/api/secure/orders/:id", async (req, res) => {
    const { id } = req.params;
    const { customerId, startDate, totalPrice, totalMass, status, products } = req.body;
    
    const updatedOrder = {
        orderId: id,
        customerId,
        startDate,
        totalPrice,
        totalMass,
        status,
        products
    };

    try {
        await orderController.updateOrder(updatedOrder);
        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating order" });
    }
});



module.exports = router;