import Note from "../models/Note.js";

export async function getAllNotes (_,res) {
    try{
        const notes =await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch(error){
     console.error("Error in getAllNotes controller", error);
     res.status(500).json({message:"Internal server error"});
    }  
};

export async function getNoteById (req, res)  {
    try{
        
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "Note not found"})
        res.json(note)
    }catch (error){
         console.error("Error in  getAllNotes controller", error);
     res.status(500).json({message:"Internal server error"});
    }
}

export async function createNotes (req, res) {
    try {
        const {title,content} = req.body;
        const note =new Note({title, content}) 

        const savedNote = await note.save();
        res.status(201).json(savedNote);
        
    }catch(error){
        console.error("Error in createNotes controller", error);
     res.status(500).json({message:"Internal server error"});

    }
}


export async function updateNotes(req, res)  {
    try{
        const {title,content} =req.body
        const updateNotes = await Note.findByIdAndUpdate(req.params.id,{title,content},{
            new:true,
        })
        if (!updateNotes) return res.status(404).json({ message: "Note not found"})


        res.status(200).json({message: "Note updated successfully"})
    }catch (error){
         console.error("Error in updateNotes controller", error);
     res.status(500).json({message:"Internal server error"});
    }
}

export async function deleteNotes(req, res)  {
    try{
        const {title,content} =req.body
        const deleteNotesNotes = await Note.findByIdAndDelete(req.params.id,{title,content},{
            new:true,
        })
        if (!deleteNotes) return res.status(404).json({ message: "Note not found"})


        res.status(200).json({message: "Note deleted successfully"})
    }catch (error){
         console.error("Error in deleteNotes controller", error);
     res.status(500).json({message:"Internal server error"});
    }
}
