from area import rectangle


PEOPLE_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
area_total = rectangle(FIELD_LENGTH, FIELD_WIDTH)
peoples = area_total * PEOPLE_SQUARE_METER
print("Estão presentes no show aproximadamente", peoples, "pessoas.")
