import { Title } from "@solidjs/meta";
import { onMount } from "solid-js";

export default function Snetro() {
  let canvasRef!: HTMLCanvasElement;
  const gameLocation: string = "/gamefiles/snetro/";

  onMount(async () => {
    await loadScript("/gamefiles/snetro/Build/Builds.loader.js");
    const unityConfig = {
      dataUrl: `${gameLocation}Build/Builds.data.br`,
      frameworkUrl: `${gameLocation}Build/Builds.framework.js.br`,
      codeUrl: `${gameLocation}Build/Builds.wasm.br`,
      streamingAssetsUrl: `StreamingAssets`,
      companyName: `razra dev`,
      productName: `Snetro`,
      productVersion: `1.0`,
    };

    createUnityInstance(canvasRef, unityConfig).then((instance) => {
      console.log("Unity loaded", instance);
    });
  });

  function loadScript(src: string) {
    return new Promise<void>((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }

  return (
    <>
      <Title>Snetro</Title>
      <div class="w-full aspect-[3/2]">
        <canvas id="unity-canvas" ref={canvasRef} class="w-full h-full" />
      </div>
    </>
  );
}
