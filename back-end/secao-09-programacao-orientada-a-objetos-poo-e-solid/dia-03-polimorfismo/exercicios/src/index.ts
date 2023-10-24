import Clube from "./classes/Clube";
import QuadraFutebol from "./classes/QuadraFutebol";
import QuadraTenis from "./classes/QuadraTenis";

const clube = new Clube();
const futebol = new QuadraFutebol({chuteira: 'trava'});
const tenis = new QuadraTenis();

clube.adicionarQuadra(futebol);
clube.adicionarQuadra(tenis);

futebol.reservar(new Date());

futebol.reservar(new Date());

tenis.reservar(new Date());
tenis.reservar(new Date());

console.log(
  clube.buscarQuadra<QuadraFutebol>(0).agenda,
  clube.buscarQuadra<QuadraFutebol>(1).agenda,
);