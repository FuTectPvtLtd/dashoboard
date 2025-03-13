from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.responses import StreamingResponse
import pandas as pd
import io

app = FastAPI()

# Mount static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Setup Jinja2 templates
templates = Jinja2Templates(directory="templates")

@app.get("/", include_in_schema=False)
def index(request: Request):
    return templates.TemplateResponse("dashboard.html", {"request": request})

@app.get("/base", include_in_schema=False)
def base(request: Request):
    return templates.TemplateResponse("base.html", {"request": request})

@app.get("/over", include_in_schema=False)
def over(request: Request):
    return templates.TemplateResponse("overview.html", {"request": request})

@app.get("/reports", include_in_schema=False)
def register(request: Request):
    return templates.TemplateResponse("reports.html", {"request": request})

@app.get("/machine", include_in_schema=False)
def dashboard(request: Request):
    return templates.TemplateResponse("machine.html", {"request": request})

@app.get("/pareto", include_in_schema=False)
def pareto(request: Request):
    return templates.TemplateResponse("pareto.html", {"request": request})

@app.get("/info", include_in_schema=False)
def info(request: Request):
    return templates.TemplateResponse("info.html", {"request": request})

@app.get("/support", include_in_schema=False)
def support(request: Request):
    return templates.TemplateResponse("support.html", {"request": request})

@app.get("/download_excel")
def download_excel():
    # Define data (matching the chart data)
    data = {
        "Category": ["Die Changed planned", "Power Fluctuation", "Mechanical"],
        "Downtime (Minutes)": [3, 15, 15]
    }

    # Convert to Pandas DataFrame
    df = pd.DataFrame(data)

    # Save to an in-memory Excel file
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine="xlsxwriter") as writer:
        df.to_excel(writer, index=False, sheet_name="Downtime Data")
    
    output.seek(0)

    # Serve the file for download
    headers = {
        "Content-Disposition": "attachment; filename=downtime_data.xlsx"
    }
    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers=headers
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)