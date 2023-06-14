import mongoose, { Schema, SchemaTypes, model } from "mongoose";

// const blogSchema = new Schema({
//     title: String,
//     body: String,
//     comments: [{ title: String, comment: String }]
// });

await mongoose.connect("mongodb://localhost:27017/testitest")


// ====== Embeded Sub-Documents ======

// const BlogPostModel = model("BlogPost", blogSchema)

// const BlogPost = new BlogPostModel({
//     title: "How to disconnect from MongoDB",
//     body: "Use mongoose.disconnect() because Oli taught us this morning.",
// });

// BlogPost.comments.push({
//         title: "What an amazing post",
//         comment: "I lost my shit!",
//     })

// await BlogPost.save()



// ====== RELATIONS ======

// teacher Schema
const teacherSchema = new Schema({
    name: String,
    lastname: String,
})

const TeacherModel = model("Teacher", teacherSchema)


// student Schema
const studentSchema = new Schema({
    name: String,
    lastname: String,
    teacher: [{ type: SchemaTypes.ObjectId, ref: TeacherModel }],
})

const StudentModel = model("Student", studentSchema)


// const teacher = await TeacherModel.create({
//     name: "Albert",
//     lastname: "Einstein",
// })

// const student = new StudentModel({
//     name: "Peter",
//     lastname: "Maffay",

// })

// // teacher in die student db pushen
// student.teacher.push(teacher);

// // neuen student speichern
// await student.save()


// Auffinden des Students mit dem passenden Teacher
const studentWithTeacherID = await StudentModel.findById("6489930e1988f716de108fd2").populate("teacher");

console.log(studentWithTeacherID);

await mongoose.disconnect()