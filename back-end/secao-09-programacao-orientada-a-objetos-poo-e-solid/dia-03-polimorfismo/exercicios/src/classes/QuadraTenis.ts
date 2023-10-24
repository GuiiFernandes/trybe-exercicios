import IAgenda from "../interfaces/IAgenda";
import ITenis from "../interfaces/ITenis";
import normas from "../normas/normasDeUso";
import Quadra from "./Quadra";

class QuadraTenis extends Quadra {
  constructor(private normasUso: ITenis = normas.tenis) { super(); }
  private generateProtocol(): string {
    return (Math.random() + 1).toString(30).substring(3);
  }

  reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    const reserva = {
      protocolo: this.generateProtocol(),
      data: horaReserva,
      regras: this.normasUso,
    };
    this._agenda.push(reserva);
    return reserva as unknown as IAgenda<ITenis>;
  }
}

export default QuadraTenis;