# SQLGPT

SQLGPT is a powerful model designed to generate SQL queries based on your table information and specific questions. Simply provide the context of your table, ask a question, and SQLGPT will generate the corresponding SQL query for you.

### Live
You can interact with it live here: `https://sqlgpt-hazel.vercel.app/`
But as its deployed on huggingface spaces with 1 thread available and its running on CPU so be patient ;) it can take time (secret!! it can take upto 1 min)

## Features

- **SQL Query Generation:** Input table details and your query; the model generates the appropriate SQL command.
- **Fine-Tunning:** The model is fine-tuned on Google's Gemma 2b using the dataset available [here](https://huggingface.co/datasets/b-mc2/sql-create-context) on Hugging Face.
- **Model Availability:** The model is available on both Kaggle and Hugging Face.
- **Quantization:** The finetunned model is being quantized to 4-bit in GGUF format using llama.cpp

## Getting Started

### Running the UI Interface on Unix Distributions (Linux, macOS)

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/awaistahseen009/SQLGPT
    ```

2. **Install the Requirements:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Download the Quantized Model Setup:**

    Download the quantized model from [Hugging Face](https://huggingface.co/spaces/awais009/SQLGPT/tree/main).

4. **Run the UI Interface:**

    - Update the API request URL in `App.jsx`:

      ```javascript
      // Change this line in App.jsx
      const apiUrl = "http://localhost:8000/query";
      ```

    - Start the server:

      ```bash
      uvicorn main:app
      ```

5. **Launch the UI:**
    Run npm run dev in ui folder's terminal and 
    Open the UI in your browser to interact with the model.
    on  `http://localhost:8000`

### Windows Users

If you're using Windows, the `llama-cpp` package is not available, so you will need to follow these steps:

1. **Clone the llama.cpp Repository:**

    ```bash
    git clone https://github.com/ggerganov/llama.cpp
    ```

2. **Download the Quantized Model:**

    Download the quantized model from [Hugging Face](https://huggingface.co/spaces/awais009/SQLGPT/tree/main/quantized_model).

3. **Run the Model:**

    In your terminal, execute the following command:

    ```bash
    ./llama.cpp/llama-cli -m ./quantized_model/sql_gpt_quantized.gguf -n 256 -p "### QUESTION:\n{question_here}\n\n### CONTEXT:\n{context_here}\n\n### [RESPONSE]:\n"
    ```

4. **Prompt Template:**

    Use the following prompt template when interacting with the model:

    ```text
    ### QUESTION:
    {question_here}

    ### CONTEXT:
    {context_here}

    ### [RESPONSE]:
    ```

## Fine-Tuned and Quantization Files

You can download the fine-tuned model and quantization files from the [SQLGPT Fine Tune Material Repository](https://github.com/awaistahseen009/SQLGPTFineTuneMaterial).

## Contributing

Contributions are welcome! Feel free to fork the project, make improvements, and submit a pull request.

---

Happy querying with SQLGPT!
