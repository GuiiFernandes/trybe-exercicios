import IAgenda from "../interfaces/IAgenda";
import IFutebol from "../interfaces/IFutebol";
import normas from "../normas/normasDeUso";
import Quadra from "./Quadra";

class QuadraFutebol extends Quadra {
  constructor(private normasUso: IFutebol = normas.futebol) { super(); }
  private generateProtocol(): string {
    return (Math.random() + 1).toString(30).substring(3);
  }

  reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    const reserva = {
      protocolo: this.generateProtocol(),
      data: horaReserva,
      regras: this.normasUso,
    };
    this._agenda.push(reserva);
    return reserva as unknown as IAgenda<IFutebol>;
  }
}

export default QuadraFutebol;