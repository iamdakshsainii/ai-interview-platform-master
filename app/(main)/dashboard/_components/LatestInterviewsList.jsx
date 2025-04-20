"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState([]);

  return (
    <div className="my-5">
      <h2 className="text-2xl font-bold">Previously Created Interviews</h2>

      {interviewList?.length === 0 ? (
        <div className="p-5 flex flex-col gap-3 items-center justify-center mt-5">
          <Video className="w-10 h-10 text-primary" />
          <h2>
            You don&apos;t have any interview created!
          </h2>
          <Button >
            + Create New Interview
          </Button>
        </div>
      ) : (
        <div>
          {/* Future: Render interview cards here */}
        </div>
      )}
    </div>
  );
}

export default LatestInterviewsList;
