const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: "https://your-domain.vercel.app/tonconnect-manifest.json"
});

document.getElementById("connect").onclick = async () => {
  await tonConnectUI.connectWallet();
};

document.getElementById("mint").onclick = () => {
  alert("Mint logic: next step (контракт)");
};
