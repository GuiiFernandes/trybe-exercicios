public class Main {
  public static void main(String[] args) {
    HoraRefeicao hr = new HoraRefeicao();
    hr.calcularHoraRefeicao();

    IdadeEmDias id = new IdadeEmDias();
    System.out.println("Dias desde o nascimento: " + id.calcularIdadeEmDias("1992-07-02T10:30:00") + " dias");

    AlertaAniversario aa = new AlertaAniversario();
    aa.checarAniversario("02-07-1992");
    aa.checarAniversario("02-02-1992");
    aa.checarAniversario("26-02-1992");

    PontoEletronico pe = new PontoEletronico();
    pe.marcarHoraExtra("17:30:00");
    pe.marcarHoraExtra("17:00:00");
    pe.marcarHoraExtra("16:30:00");
  }
}
