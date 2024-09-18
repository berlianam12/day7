class Alarm {
    constructor() {
        this.waktuAlarm = null;
        this.timeoutAlarm = null;
    }

    setelAlarm(waktu) {
        this.hapusAlarm();
        const [jam, menit] = waktu.split(':').map(Number);
        const sekarang = new Date();

        const waktuAlarm = new Date(sekarang.getFullYear(), sekarang.getMonth(), sekarang.getDate(), jam, menit, 0);

        if (waktuAlarm <= sekarang) {
            waktuAlarm.setDate(waktuAlarm.getDate() + 1);
        }

        const waktuKeAlarm = waktuAlarm.getTime() - sekarang.getTime();

        this.timeoutAlarm = setTimeout(() => {
            this.bunyikanAlarm();
        }, waktuKeAlarm);

        this.waktuAlarm = waktuAlarm;
        console.log(`Alarm disetel untuk ${waktuAlarm.toLocaleTimeString()}`);
    }

    bunyikanAlarm() {
        console.log("Alarm ringing! Wake up!");
        alert("Alarm ringing! Wake up!");
    }

    hapusAlarm() {
        if (this.timeoutAlarm) {
            clearTimeout(this.timeoutAlarm);
            console.log("Alarm dihapus.");
        }
        this.timeoutAlarm = null;
    }
}

const alarmSaya = new Alarm();

function setelAlarm() {
    const waktuInput = document.getElementById('waktuAlarm').value;
    if (waktuInput) {
        alarmSaya.setelAlarm(waktuInput);
    } else {
        alert('Masukkan waktu yang valid!');
    }
}

function hapusAlarm() {
    alarmSaya.hapusAlarm();
}
