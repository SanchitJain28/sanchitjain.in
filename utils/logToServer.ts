import fs from "fs";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logToServer(message: string, data: any, filePath?: string) {
  try {
    const baseLogDir = path.join(process.cwd(), "logs");
    const folderName = filePath ? `${filePath}_logs` : "general_logs";
    const logDir = path.join(baseLogDir, folderName);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const date = new Date().toISOString().split("T")[0];
    const logFile = path.join(logDir, `logs_${date}.log`);
    const logEntry = {
      timestamp: new Date().toISOString(),
      message,
      data,
    };

    fs.appendFileSync(logFile, JSON.stringify(logEntry) + "\n", "utf8");
  } catch (err) {
    console.error("Logging failed:", err);
  }
}
