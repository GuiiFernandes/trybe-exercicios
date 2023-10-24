import IAgenda from "../interfaces/IAgenda";
import IFutebol from "../interfaces/IFutebol";
import ITenis from "../interfaces/ITenis";

abstract class Quadra {
  protected _agenda: IAgenda<IFutebol | ITenis>[] = [];

  get agenda(): IAgenda<IFutebol | ITenis>[] { return this._agenda; }

  abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}

export default Quadra;