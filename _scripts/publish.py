import PySimpleGUI as sg # pip install PySimpleGUI
from sultan.api import Sultan
import os
def notify(fin):
    if str(fin).find("->") !=-1:
        sg.Popup('Published Successfully')
        print(str(fin))
    else:
        sg.Popup(str(fin))
def run(command, print_command=True):
    with Sultan.load() as s:
        s.commands = [command]
        out = s.run()
        stdout = '\n'.join(out.stdout)
        stderr = '\n'.join(out.stderr)
        stdout = "" if stdout == "" else "STDOUT:\n" + stdout
        stderr = "" if stderr == "" else "\nSTDERR:\n" + stderr
        ret = stdout + stderr
    return ret
if os.name == 'nt':
    # Temporary accomadation until sultan gets fixed
    print(run('git fetch &'))
    print(run('git pull &'))
    print(run('git add -A &'))
    print(run('git commit -m "update" &'))
    notify(run('git push &'))


else:
    print(run('git fetch'))
    print(run('git pull'))
    print(run('git add -A'))
    print(run('git commit -m "update"'))
    notify(run('git push'))
