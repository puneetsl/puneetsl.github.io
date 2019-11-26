from sultan.api import Sultan
import os
import datetime
import shutil
import fileinput

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

# event, (filename,) = sg.Window('Get iPython notebook file'). Layout([[sg.Text('Filename')], [sg.Input(), sg.FileBrowse()], [sg.OK(), sg.Cancel()] ]).Read()
filename = input("Get iPython notebook file: ")
if filename.endswith(".ipynb"):
    convert = "ipython nbconvert --to markdown "+filename+" --output-dir "+"./_posts/"
    d = datetime.datetime.today()
    d_text = d.strftime('%Y-%m-%d')
    if os.name == 'nt':
        base = filename.split("\\")[-1]
    else:
        base = base = filename.split("/")[-1]
    print(run(convert))
    shutil.move("./_posts/"+base[:-5]+"md", "./_posts/"+d_text+"-"+base[:-5]+".md")
    shutil.move("./_posts/"+base[:-6]+"_files", "assets/"+base[:-6]+"_files")
    st = open("./_posts/"+d_text+"-"+base[:-5]+".md").read()
    st = st.replace(base[:-6]+"_files", "assets/"+base[:-6]+"_files")
    f = open("./_posts/"+d_text+"-"+base[:-5]+".md", 'w')
    f.write(st)
    f.close()
else:
    print("Please chose an ipynb file to publish")
