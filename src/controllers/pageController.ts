import { Request,Response } from "express";

export const home = (req:Request, res: Response)=>{
    res.render('pages/page',{
        menu:{
            all:true,
            dog:false,
            cat:false,
            fishe:false
        },
        banner:{
            title:"Todos os Animais",
            background:"allanimals.jpg"
        }
    })

}
export const dogs = (req:Request, res: Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dog:true,
            cat:false,
            fishe:false
        },
        banner:{
            title:"Cachorros",
            background:"banner_dog.jpg"
        }
    })
}


export const cats = (req:Request, res: Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dog:false,
            cat:true,
            fishe:false
        },
        banner:{
            title:"Gatos",
            background:"banner_cat.jpg"
        }
    })
}


export const fishes = (req:Request, res: Response)=>{
    res.render('pages/page',{
        menu:{
            all:false,
            dog:false,
            cat:false,
            fishe:true
        },
        banner:{
            title:"Peixes",
            background:"banner_fish.jpg"
        }
    })
}



