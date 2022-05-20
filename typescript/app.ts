class App {

    private canvas: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    private circuit: CanvasImageSource

    private widthRatio: number 
    private heightRatio: number

    private click: number[]


    constructor() {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement 
        let context = canvas.getContext("2d")

        this.canvas = canvas
        this.context = context

        let circuit = new Image() as HTMLImageElement
        circuit.src = "./assets/images/circuit-A.png"

        circuit.onload = () => {
            this.circuit = circuit
            this.widthRatio = (Number(this.circuit.width)/this.canvas.width)/2
            this.heightRatio = (Number(this.circuit.height)/this.canvas.height)/2
        }

        this.resizeCanvas()
        this.createUserEvents()
        this.anim()
    }


    private createUserEvents = () => {
        this.canvas.addEventListener("mousedown", this.pressEventHandler);

        window.addEventListener("resize", this.resizeCanvas)
    }

    private pressEventHandler = (event: MouseEvent) => this.click = [event.clientX, event.clientY]

    private clearCanvas = () => this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    private resizeCanvas = () => {
        this.canvas.width = window.innerWidth - 20
        this.canvas.height = window.innerHeight - 30
    }

    private anim = () => {
        this.clearCanvas()

        requestAnimationFrame(this.anim);

        
        let width: number = (this.canvas.width / this.widthRatio)
        let height: number = (this.canvas.height / this.heightRatio)

        let posx: number = this.canvas.width / 2 - Number(width) / 2
        let posy: number = this.canvas.height / 2 - Number(height) / 2

        this.context.drawImage(this.circuit, posx, posy, width, height)

        

        this.context.stroke()
    }

}

new App();