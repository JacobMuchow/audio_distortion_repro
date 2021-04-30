# Explanation

This simplified example reproduces the issue I am facing with AudioWorkletProcessor using a MediaStream source. If you start the app using a wired-in mic/speakers (such as a Macbook Pro mic/speakers), then connect a bluetooth device the audio becomes distorted.

# Repro steps

- I've tested this repro on a Macbook Pro, OS X Big Sur, using Chrome and Brave. Firefox crashes because of an array length issue (some other problem).
- I have not tested on Windows or Linux.

Steps:

- Have bluetooth headphones (such as Airpods or a headset) available, but not connected and have your system default set to some hard-wired speakers (ex. Macbook mic/speakers)
- Load the web page --> you should hear audio playback sound normal.
- Connect bluetooth headphones and allow the system to switch over to those.
- Result: audio sounds distorted / robotic sounding.

## Running the project

Install dependencies

```
npm install
```

Start the app on localhost

```
npm start
```
