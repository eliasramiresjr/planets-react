import React, { Fragment, useState, useEffect } from "react"
import Planet from "./planet"
import Form from "./form"
//NÃO BAIXA DADOS DA API
async function getPlanets() {
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json()
    return data
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data["planets"])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Form addPlanet={addPlanet}/>
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                />
            )}
        </Fragment>
    )

}


export default Planets

/*
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicatePlanet}>Duplicate</button>
*/

/* CLASS
class Planets extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            planets: [  ]
        }
    }

    componentDidMount(){
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data ["planets"]
            }))
        })
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState (state => ({
            planets: new_planets
        }))
    }

    duplicatePlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets : [...this.state.planets, last_planet]
        }))
    }

    render(){
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={this.removeLast}>Remove Last</button>
            <button onClick={this.duplicatePlanet}>Duplicate</button>
            <hr/>
            {this.state.planets.map((planet, index) => 
            <Planet
                id={planet.id}
                name={planet.name}
                description={planet.description}
                img_url={planet.img_url}
                link={planet.link}
                key={index}
            />
            )}
        </Fragment>
        )
    }
}
*/

/* STATE
class Planets extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            planets: [
                {
                    name:"Mércurio",
                    description:"Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                },
                {
                    name:"Plutão",
                    description:"Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                    link:"https://pt.wikipedia.org/wiki/Plut%C3%A3o",
                    img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                },
            ]
        }
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState (state => ({
            planets: new_planets
        }))
    }

    duplicatePlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets : [...this.state.planets, last_planet]
        }))
    }

    render(){
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={this.removeLast}>Remove Last</button>
            <button onClick={this.duplicatePlanet}>Duplicate</button>
            <hr/>
            {this.state.planets.map((planet) => 
            <Planet 
                name={planet.name}
                description={planet.description}
                link={planet.link}
                img_url={planet.img_url}
            />
            )}
        </Fragment>
        )
    }
}
*/


/*PROPS
const showMessage = () => {
console.log("Meu primeiro evento")

}
const Planets = (props) => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={showMessage}>Show message!</button>
            <hr/>
            <Planet name="Mércurio"
                    description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas."
                    link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    title_with_underline={true}
            />
            <Planet name="Plutão"
                    description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
                    //link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
                    gray={true}
            />
        </Fragment>
    )
}
*/

