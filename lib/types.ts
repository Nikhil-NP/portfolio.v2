
//creating the interface for my data
export interface PersonalInfo{
    name:string,
    greetings:string,
    subTitle:string,
    description:string,
    email:string,
    image:string,
}


export interface SocialLinks{
    x:string,
    github:string,
    linkedIn:string,
    email:string,
    
}

export interface Education{
    institution:string,
    degree:string,
    duration:string,
}

export interface NavItems{
    href:string,
    label:string,
}

export interface Projects{
    title:string,
    description:string,
    tech:Array<string>,
    github:string,
    demourl?:string,
    liveurl?:string,
    image?:string,
}

