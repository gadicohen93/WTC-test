from os import listdir
from os.path import isfile, join
onlyfiles = ['img/flags-normal/' + f for f in listdir('img/flags-normal') if isfile(join('img/flags-normal', f))]

print onlyfiles
