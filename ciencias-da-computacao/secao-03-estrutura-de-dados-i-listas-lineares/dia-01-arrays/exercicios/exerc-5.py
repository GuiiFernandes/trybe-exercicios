servers = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
#  0  1  2
# [1, 0, 0] 0
# [1, 0, 0] 1
# [0, 0, 1] 2


def count_connecteds(servers):
    connecteds = 0
    servers_row = [0] * len(servers)
    servers_column = [0] * len(servers[0])
    for row_i in range(len(servers)):
        for column_i in range(len(servers[row_i])):
            if servers[row_i][column_i] == 1:
                servers_row[row_i] += 1
                servers_column[column_i] += 1
    for row_i in range(len(servers)):
        for column_i in range(len(servers[row_i])):
            if servers[row_i][column_i] == 1 and (
                servers_row[row_i] > 1 or servers_column[column_i] > 1
            ):
                connecteds += 1
    return connecteds


print(count_connecteds(servers))
