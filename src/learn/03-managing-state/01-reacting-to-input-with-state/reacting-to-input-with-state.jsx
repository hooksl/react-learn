import { useState } from 'react';

export default function Form() {
    // console.log("Form")
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>答对了！</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        // console.log("handleSubmit 1")
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
        // console.log("handleSubmit 2")
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
        // console.log('handleTextareaChange')
    }

    return (
        <>
            <h2>城市测验</h2>
            <p>
                哪个城市有把空气变成饮用水的广告牌？
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    提交
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    // 模拟接口请求
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('猜的不错，但答案不对。再试试看吧！'));
            } else {
                resolve();
            }
        }, 3500);
    });
}

