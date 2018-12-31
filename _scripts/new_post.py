import PySimpleGUI as sg # pip install PySimpleGUI
import datetime
import os

event, (post_title,) = sg.Window('Insert your post title'). Layout([[sg.Text('Post title')], [sg.Input()], [sg.OK(), sg.Cancel()] ]).Read()
if post_title != "":
    d = datetime.datetime.today()
    d_text = d.strftime('%Y-%m-%d')
    post_title = post_title.replace(" ", "-")
    f_name = "_posts/"+d_text+"-"+post_title+".md"
    mode = 'a' if os.path.exists(f_name) else 'w'
    if not os.path.exists(f_name):
        with open(f_name, mode) as f:
            f.write("")
        f.close()
    else:
        sg.Popup('Blog already exists, choose a different name')
