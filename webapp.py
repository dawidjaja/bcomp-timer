from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    # block size in milisecond
    time_block = 20 * 60 * 1000

    schedule_title = ("T1", "T2", "T3", "T4", "T5")

    # schedule title tupled with number of blocks
    schedule = (
        (("S1", 2), ("P1", 1), ("S2", 2), ("P2", 1), (None, 2)),
        (("S2", 2), ("P2", 1), ("S1", 2), ("P1", 1), (None, 2)),
        ((None, 1), ("S1", 2), ("P1", 1), ("S2", 2), ("P2", 1), (None, 1)),
        ((None, 1), ("S2", 2), ("P2", 1), ("S1", 2), ("P1", 1), (None, 1)),
        ((None, 2), ("S1", 2), ("P1", 1), ("S2", 2), ("P2", 1))
    )

    assert len(schedule_title) == len(schedule)
    return render_template("index.html", time_block=time_block, schedule_title=schedule_title, schedule=schedule,  schedule_len=len(schedule))
